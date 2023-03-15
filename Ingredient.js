class Ingredient {
    constructor (name, macros, perGram, usageGrams) {
        this.name = name;
        this.macros = macros;
        this.usageGrams = usageGrams;
        this.perGram = perGram;

        //calls the calculate macros method, to calculate the ingredient's macros.
        this.calculateMacros();
    }

    //updates the calculated macros array,
    //this allows for changes to macros and recalculation
    //along with recalculation of usageGrams.
    calculateMacros() {
        //clear existing array
        let calculatedMacros = [];
        //going through each macro value and calulating how much of the macro is in the ingredient.
        for (let macro in this.macros) {
            //divide the macro value by the per gram value to get the macro per gram value
            //then multiply the macro per gram value by usage grams to get the macro usage.
            let macroValue = (this.macros[macro]['value'] / this.perGram) * this.usageGrams;
            let macroUnit = this.macros[macro]['unit'];
            let macroObject = {'name':macro, 'value':macroValue.toFixed(2), 'unit':macroUnit};
            calculatedMacros.push(macroObject);
        }
        return (calculatedMacros);
    }

    //Setters, when changing object value, we usally want to recalculate the macros,
    //to keep the calculated macro data up to date.
    setUsageGrams(usageGrams) {
        this.usageGrams = usageGrams;
    }

    setMacros(macros) {
        this.macros = macros;
    }

    //Getters
    getMacros() {
        return(this.calculateMacros());
    }
}