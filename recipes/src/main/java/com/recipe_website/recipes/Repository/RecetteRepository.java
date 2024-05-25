package com.recipe_website.recipes.Repository;

import com.recipe_website.recipes.Entity.Recette;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecetteRepository extends JpaRepository<Recette, Integer> {
    List<Recette> findByType(String type);
    List<Recette> findByNomContaining(String name);

}