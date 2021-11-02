export default class InputParameters {

    constructor(textFile) {
        this.numberPatterns = this.getNumberPatterns(textFile);
        this.numberDesiredOutputs = this.getNumberDesiredOutputs(textFile);
        this.numberNetworkOutputs = this.numberDesiredOutputs;
        this.numberEntrys = this.getNumberTickets(textFile);
        this.inputs = this.getInputs(textFile);
        this.outputs = this.getOutputs(textFile);
        this.dataFile = this.getDataFile(textFile);
        this.entranceType = this.getEntranceType(textFile);
        this.isBinary = this.getIfIsBinary(textFile);
    }

    getNumberDesiredOutputs(textFile){
        let outputs = this.getOutputs(textFile);
        return outputs.length;
    }

    getNumberTickets(textFile){
        let inputs = this.getInputs(textFile);
        return inputs.length;
    }

    getFirstLine(textFile) {
        let separatorLine = "\n";
        return textFile.split(separatorLine)[0];
    }

    getNumberPatterns(textFile) {
        let separatorLine = "\n";
        let lines = textFile.split(separatorLine);
        return lines.length;
    }

    getInputs(textFile) {
        let separatorBetween = "|";
        let line = this.getFirstLine(textFile);
        let lineInputs = line.split(separatorBetween)[0];
        return lineInputs.split(';');
    }

    getOutputs(textFile) {
        let separatorBetween = "|";
        let line = this.getFirstLine(textFile);
        let lineOutputs =  line.split(separatorBetween)[1];
        return lineOutputs.split(';');
    }

    getDataFile(textFile) {
        let separatorLine = "\n";
        let lines = textFile.split(separatorLine);
        let dataFile = [];
        lines.forEach(line => {
            let data = {
                inputs : this.getInputs(line),
                outputs : this.getOutputs(line)
            }
            dataFile.push(data);
        });
        return dataFile;
    }

    getEntranceType(textFile) {
        let isBinary = this.getIfIsBinary(textFile);
        return isBinary ? "Binario" : "Bipolar";
    }

    getIfIsBinary(textFile) {
        let dataFile = this.getDataFile(textFile);
        return dataFile.some(data => data.inputs.find(n => n == "0"));
    }

}
