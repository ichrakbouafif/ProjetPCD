package com.recipe_website.recipes.Controller;

import com.recipe_website.recipes.Entity.Recette;
import com.recipe_website.recipes.Service.RecetteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/*@CrossOrigin(origins = "*")*/
@RestController
@RequestMapping("/recettes")
public class RecetteController {

    @Autowired
    private RecetteService recetteService;

    @GetMapping("/")
    public List<Recette> getAllRecettes() {
        return recetteService.getAllRecettes();
    }

    @GetMapping("/{id}")
    public Recette getRecetteById(@PathVariable int id) {
        return recetteService.getRecetteById(id);
    }

    @PostMapping("/")
    public Recette createRecette(@RequestBody Recette recette) {
        return recetteService.saveRecette(recette);
    }

    @DeleteMapping("/{id}")
    public void deleteRecette(@PathVariable int id) {
        recetteService.deleteRecette(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/type/{type}")
    public List<Recette> getRecettesByType(@PathVariable String type) {
        return recetteService.getRecettesByType(type);
    }

    @GetMapping("/search/{name}")
    public List<Recette> searchRecettesByName(@PathVariable String name) {
        return recetteService.searchRecettesByName(name);
    }
}
