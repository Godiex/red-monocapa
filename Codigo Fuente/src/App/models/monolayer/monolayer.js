class monolayer {

    constructor(inputParameters) {
        this.weight = this.getWeight(inputParameters);
        this.weightMatrix = this.getWeight(inputParameters);
    }

    getWeight(inputParameters) {
        return inputParameters.numberDesiredOutputs * inputParameters.numberTickets;
    }

    createRandomMatrix() {
        let nombre
    }

}
