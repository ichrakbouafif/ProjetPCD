package com.recipe_website.recipes.Service;

import com.recipe_website.recipes.Entity.Recette;
import com.recipe_website.recipes.Repository.RecetteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecetteService{

    @Autowired
    private RecetteRepository recetteRepository;

    public List<Recette> getAllRecettes() {
        return recetteRepository.findAll();
    }

    public Recette getRecetteById(int id) {
        return recetteRepository.findById(id).orElse(null);
    }


    public Recette saveRecette(Recette recette) {
        return recetteRepository.save(recette);
    }

    public void deleteRecette(int id) {
        recetteRepository.deleteById(id);
    }

    public List<Recette> getRecettesByType(String type) {
        return recetteRepository.findByType(type);
    }

    public List<Recette> searchRecettesByName(String name) {
        return recetteRepository.findByNomContaining(name);
    }

}
