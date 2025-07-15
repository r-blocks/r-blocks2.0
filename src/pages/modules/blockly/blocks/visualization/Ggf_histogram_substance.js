import Blockly from 'blockly';

Blockly.Blocks['Ggf_histogram_substance'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_histogram(~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable')
      .appendField('|')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable')
      .appendField(', bins =')
      .appendField(new Blockly.FieldTextInput(''), 'bins')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('histogram by groups');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_histogram'
    );
  },
};

Blockly.JavaScript['Ggf_histogram_substance'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_bins_number = block.getFieldValue('bins');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'gf_histogram(~' +
    dropdown_quantitative_var_name +
    '|' +
    dropdown_categorical_var_name +
    ', bins = ' +
    dropdown_bins_number +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};
