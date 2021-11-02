class Monolayer {

    dynamicRat = 0;
    inputParameters = undefined;
    weightMatrix = undefined;
    thresholds = undefined;
    min = -1;
    max = -2;

    constructor(inputParameters, numberIterations, maximumErrorAllowed, learningRat) {
        this.inputParameters = inputParameters;
        this.numberIterations = numberIterations;
        this.maximumErrorAllowed = maximumErrorAllowed;
        this.learningRat = learningRat;
        this.initParameters();
    }

    initParameters() {
        this.weightMatrix = this.createArray(this.inputParameters.numberEntrys, this.inputParameters.numberDesiredOutputs);
        this.thresholds = this.createArray(this.inputParameters.numberDesiredOutputs)
    }

    generateRandomWeights() {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                this.weightMatrix[i][j] = this.getRandomArbitrary(this.min, this.max);
            }
        }
    }

    getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    getNewWeight() {

    }

    getValueFunctionActivationBinary (number) {
        if (number >= 0)
            return 1;
        if (number < 0)
            return 0;
    }

    getValueFunctionActivationBipolar (number) {
        if (number >= 0)
            return 1;
        if (number < 0)
            return -1;
    }

    createArray(length) {
        let arr = new Array(length || 0),
            i = length;
        if (arguments.length > 1) {
            let args = Array.prototype.slice.call(arguments, 1);
            while(i--) arr[length-1 - i] = this.createArray.apply(this, args);
        }
        return arr;
    }





}
