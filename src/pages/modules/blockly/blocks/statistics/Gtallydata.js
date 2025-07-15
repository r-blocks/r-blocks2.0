import Blockly from 'blockly';

Blockly.Blocks['Gtallydata'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('tally(~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Choose a categorical variable and a dataset to get a contingence table');
    this.setHelpUrl('https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally');
  },
};

Blockly.JavaScript['Gtallydata'] = function (block) {
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'tally(~' + dropdown_categorical_var_name + ', data =' + dropdown_data_name + ')\n';
  return code;
};
