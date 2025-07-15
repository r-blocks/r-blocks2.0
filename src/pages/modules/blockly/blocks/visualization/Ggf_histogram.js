import Blockly from 'blockly';

Blockly.Blocks['Ggf_histogram'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_histogram(~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable')
      .appendField(', data = ')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(', bins = ')
      .appendField(new Blockly.FieldTextInput(''), 'bins')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('histogram for one quantitative variable');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_histogram'
    );
  },
};

Blockly.JavaScript['Ggf_histogram'] = function (block) {
  var dropdown_quantitative_var_name = block.getFieldValue('quantitative_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var dropdown_bins_number = block.getFieldValue('bins');
  var code =
    'gf_histogram(~' +
    dropdown_quantitative_var_name +
    ', data = ' +
    dropdown_data_name +
    ', bins = ' +
    dropdown_bins_number +
    ')\n';
  return code;
};
