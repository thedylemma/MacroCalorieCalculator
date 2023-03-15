class DailyIntake {
    constructor() {
        this.meals = [];
    }

    getMeals() {
        return this.meals;
    }

    calculateMacros() {
        let macros = [];
        //loop through every meal, and calculate the macros.
        for (var i = 0; i < this.meals.length; i++) {
            //loop through the meal's macros.
            this.meals[i].getMacros().forEach(macro => {
                //check if macro is present in macros array, if not append and incriment.
                
            });
        }
    }
}