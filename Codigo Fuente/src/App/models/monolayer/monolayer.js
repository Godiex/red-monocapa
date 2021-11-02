class Monolayer {

    dynamicRat = 0;
    inputParameters = undefined;
    weightMatrix = undefined;
    thresholds = undefined;

    constructor(inputParameters, numberIterations, maximumErrorAllowed, learningRat, numberIntermediateLayers) {
        this.inputParameters = inputParameters;
        this.numberIterations = numberIterations;
        this.maximumErrorAllowed = maximumErrorAllowed;
        this.learningRat = learningRat;
        this.numberIntermediateLayers = numberIntermediateLayers;
        this.initParameters();
    }

    initParameters() {
        this.weightMatrix = this.createArray(this.inputParameters.numberEntrys, this.inputParameters.numberDesiredOutputs);
        this.thresholds = this.createArray(this.inputParameters.numberDesiredOutputs)
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
