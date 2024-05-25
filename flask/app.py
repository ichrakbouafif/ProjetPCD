from flask import Flask, request, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)
# Configure the MySQL connection
username = 'root'
password = 'root'
hostname = '127.0.0.1:3306'  # often localhost or an IP address
database = 'pcd'
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{username}:{password}@{hostname}/{database}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)



class User(db.Model):
    __tablename__ = 'utilisateur'  # Make sure this matches your actual table name
    id_utilisateur = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(255))
    mot_de_passe = db.Column(db.String(255))
    pseudo = db.Column(db.String(255))
    preferences = db.Column(db.Text)
    restrictions = db.Column(db.Text)
    rating = db.Column(db.Integer)

class Recipe(db.Model):
    __tablename__ = 'recettes'
    id_recettes = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.Text)
    description = db.Column(db.Text)
    type = db.Column(db.Text)
    nb_personne = db.Column(db.Text)
    tmps_preparation = db.Column(db.Text)
    tmps_cuisson = db.Column(db.Text)
    difficulte = db.Column(db.Text)
    calories = db.Column(db.Text)
    nutrition = db.Column(db.Text)
    instruction = db.Column(db.Text)
    ing = db.Column(db.Text)
    img_instruction = db.Column(db.Text)
    propriete = db.Column(db.Text)
    ingredients = db.Column(db.Text)
    cout_total =db.Column(db.Text)
    cout_par_personne = db.Column(db.Text)
    image = db.Column(db.Text)
    rating = db.Column(db.Float)
    nb_vote = db.Column(db.Float)




def get_recommendations(user_profile, top_n=6):
    preferences_str = ' '.join(user_profile['preferences'])
    restrictions_str = ' '.join(user_profile['restrictions'])
    user_profile["pref_restrict"] = preferences_str + ' ' + restrictions_str

    recettes = Recipe.query.all()
    recette_df = pd.DataFrame([{
        'id_recettes':r.id_recettes,
        'tmps_preparation':r.tmps_preparation,
        'tmps_cuisson':r.tmps_cuisson,
        'nb_personne':r.nb_personne,
        'difficulte': r.difficulte,
        'type': r.type,
        'nom': r.nom if r.nom else "Unknown",
        'image':r.image,
        'ing': r.ing,
        'propriete': r.propriete
    } for r in recettes])

    recette_df['recipe_features'] = recette_df['nom'] + ' ' + recette_df['type'] + ' ' + \
                                    recette_df['difficulte'] + ' ' + recette_df['ing'] + ' ' + \
                                    recette_df['propriete']

    vectorizer = CountVectorizer()
    recipe_vectors = vectorizer.fit_transform(recette_df['recipe_features'])
    user_vector = vectorizer.transform([user_profile["pref_restrict"]])
    cosine_sim = cosine_similarity(user_vector, recipe_vectors)
    scores = [(idx, sim) for idx, sim in enumerate(cosine_sim[0])]
    scores.sort(key=lambda x: x[1], reverse=True)
    recommended_recipe_ids = [str(recette_df.iloc[i[0]]['id_recettes'])  for i in scores[:top_n]]
    recommendations = []

    for i in scores[:top_n]:
        index = i[0]
        recipe_details = {
            "recommended_recipe_ids": str(recette_df.iloc[index]['id_recettes']),
            "tmps_preparation": recette_df.iloc[index]['tmps_preparation'],
            "tmps_cuisson": recette_df.iloc[index]['tmps_cuisson'],
            "nb_personne": recette_df.iloc[index]['nb_personne'],
            "difficulte": recette_df.iloc[index]['difficulte'],
            "type": recette_df.iloc[index]['type'],
            "nom": recette_df.iloc[index]['nom'],
            "image": recette_df.iloc[index]['image']
        }
        recommendations.append(recipe_details)
    return recommendations

@app.route("/dashboard", methods=['GET'])
@cross_origin(origins=["http://localhost:4200"])
def home():
    user = User.query.get(101)
    if user:
        preferences = user.preferences.split(',')
        restrictions = user.restrictions.split(',')
        user_profile = {
            'preferences': preferences,
            'restrictions': restrictions
        }
        recommendations = get_recommendations(user_profile)
        print("Recommendations:", recommendations)
        return jsonify({"recommendations": recommendations})
    else:
        return jsonify({"error": "User not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
