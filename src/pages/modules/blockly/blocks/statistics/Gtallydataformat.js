import Blockly from 'blockly';

Blockly.Blocks['Gtallydataformat'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('tally(~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(', format =')
      .appendField(new Blockly.FieldTextInput(''), 'format')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(
      'Choose a categorical variable, a dataset and a format  to get a contingence table'
    );
    this.setHelpUrl('https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally');
  },
};

Blockly.JavaScript['Gtallydataformat'] = function (block) {
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_format_name = block.getFieldValue('format');
  var code =
    'tally(~' +
    dropdown_categorical_var_name +
    ', data =' +
    dropdown_data_name +
    ', format = ' +
    dropdown_format_name +
    ')\n';
  return code;
};
