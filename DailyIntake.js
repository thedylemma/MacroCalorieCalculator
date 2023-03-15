class DailyIntake {
    constructor() {
        this.meals = [];
        this.date = new Date().toLocaleDateString('en-US');
    }

    addMeals(meals) {
        this.meals = this.meals.concat(meals);
    }

    addMeal(meal) {
        this.meals.push(meal);
    }

    removeMeal(index) {
        this.meals.pop(index, 1);
    }

    getMeals() {
        return this.meals;
    }

    //very similar method to Meal's calculating ingredients.
    //combine all macros of all meals
    calculateMacros() {
        let macros = [];
        this.meals.forEach(meal => {
           let mealMacros = meal.calculateMacros();
           mealMacros.forEach(macro => { 
                //check if the name is present.
                let existingMacroIndex = this.getMacroIndex(macro['name'], macros);
                if (existingMacroIndex > -1){
                    //incriment existing element.
                    macros[existingMacroIndex]['value'] = parseFloat(macros[existingMacroIndex]['value']) + parseFloat(macro['value']);
                } else {
                    //create and incriment new element.
                    macros.push({'name':macro['name'], 'value':macro['value'], 'unit':macro['unit']});
                }
           })
        });
        return(macros);
    }

    getMacroIndex(macroName, macroArray) {
        for (var i = 0; i < macroArray.length; i++) {
            if (macroArray[i]['name'] == macroName) {
                return i;
            }
        }
        return -1;
    }

    getDate() {
        return this.date;
    }
}