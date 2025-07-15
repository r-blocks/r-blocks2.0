import Blockly from 'blockly';

Blockly.Blocks['Gtallysexformatdata'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('tally(~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_1')
      .appendField('|')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable_2')
      .appendField(', format =')
      .appendField(new Blockly.FieldTextInput(''), 'format')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(
      'Select two categorical variables, a format and a dataset to make a conditional two-way table'
    );
    this.setHelpUrl('https://www.rdocumentation.org/packages/dplyr/versions/0.5.0/topics/tally');
  },
};

Blockly.JavaScript['Gtallysexformatdata'] = function (block) {
  var dropdown_categorical_var1_name = block.getFieldValue('categorical_variable_1');
  var dropdown_categorical_var2_name = block.getFieldValue('categorical_variable_2');
  var dropdown_format_name = block.getFieldValue('format');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'tally(~' +
    dropdown_categorical_var1_name +
    '|' +
    dropdown_categorical_var2_name +
    ', format = ' +
    dropdown_format_name +
    ', data =' +
    dropdown_data_name +
    ')\n';
  return code;
};
