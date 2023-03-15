class Meal {
    constructor(mealName) {
        this.name = mealName;
        this.ingredients = [];
    }
    
    //function for adding single ingredient.
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }

    //function for adding multiple ingredients.
    addIngredients(ingredients) {
        this.ingredients = this.ingredients.concat(ingredients);
    }

    //function for calculating macros.
    calculateMacros() {
        //loop through every ingredient.
        //check if the ingredient's macros are in the macro array.
        //if not add the macros and incriment macro count.
        let macros = [];
        this.ingredients.forEach(ingredient => {
            let ingredientMacros = ingredient.getMacros();
            ingredientMacros.forEach(macro => {
                //check if the name is present.
                let existingMacroIndex = this.getMacroIndex(macro['name'], macros);
                if (existingMacroIndex > -1){
                    //incriment existing element.
                    macros[existingMacroIndex]['value'] = parseFloat(macros[existingMacroIndex]['value']) + parseFloat(macro['value']);
                } else {
                    //create and incriment new element.
                    macros.push({'name':macro['name'], 'value':macro['value'], 'unit':macro['unit']});
                }
            });
        });

        return macros;
    }

    //checks if the macro name is in the macros array.
    getMacroIndex(macroName, macroArray) {
        for (var i = 0; i < macroArray.length; i++) {
            if (macroArray[i]['name'] == macroName) {
                return i;
            }
        }
        return -1;
    }
}