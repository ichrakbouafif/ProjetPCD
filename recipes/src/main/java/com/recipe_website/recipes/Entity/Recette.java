package com.recipe_website.recipes.Entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "recettes")

public class Recette {
    @Id
    private int id_recettes;
    private String nom;
    private String description;
    private String type;
    private String nb_personne;
    private String tmps_preparation;
    private String tmps_cuisson;
    private String difficulte;
    private String calories;
    private String nutrition;
    private String instruction;
    private String propriete;
    private String ingredients;
    private String cout_total;
    private String cout_par_personne;
    private String image;
    private float rating;
    private float nb_vote;



    public int getId() {
        return id_recettes;
    }

    public void setId(int id) {
        this.id_recettes = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNb_personne() {
        return nb_personne;
    }

    public void setNb_personne(String nb_personne) {
        this.nb_personne = nb_personne;
    }

    public String getTmps_preparation() {
        return tmps_preparation;
    }

    public void setTmps_preparation(String tmps_preparation) {
        this.tmps_preparation = tmps_preparation;
    }

    public String getTmps_cuisson() {
        return tmps_cuisson;
    }

    public void setTmps_cuisson(String tmps_cuisson) {
        this.tmps_cuisson = tmps_cuisson;
    }

    public String getDifficulte() {
        return difficulte;
    }

    public void setDifficulte(String difficulte) {
        this.difficulte = difficulte;
    }

    public String getCalories() {
        return calories;
    }

    public void setCalories(String calories) {
        this.calories = calories;
    }

    public String getNutrition() {
        return nutrition;
    }

    public void setNutrition(String nutrition) {
        this.nutrition = nutrition;
    }

    public String getInstruction() {
        return instruction;
    }

    public void setInstruction(String instruction) {
        this.instruction = instruction;
    }

    public String getPropriete() {
        return propriete;
    }

    public void setPropriete(String propriete) {
        this.propriete = propriete;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getCout_total() {
        return cout_total;
    }

    public void setCout_total(String cout_total) {
        this.cout_total = cout_total;
    }

    public String getCout_par_personne() {
        return cout_par_personne;
    }

    public void setCout_par_personne(String cout_par_personne) {
        this.cout_par_personne = cout_par_personne;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public float getNb_vote() {
        return nb_vote;
    }

    public void setNb_vote(float nb_vote) {
        this.nb_vote = nb_vote;
    }
}
