import Blockly from 'blockly';

Blockly.Blocks['Ggf_dens_color'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('gf_dens(~')
      .appendField(new Blockly.FieldTextInput(''), 'quantitative_variable_1')
      .appendField(', color = ~')
      .appendField(new Blockly.FieldTextInput(''), 'categorical_variable')
      .appendField(', data =')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('colored density plor for one quantitative variable');
    this.setHelpUrl(
      'https://www.rdocumentation.org/packages/ggformula/versions/0.10.1/topics/gf_density'
    );
  },
};

Blockly.JavaScript['Ggf_dens_color'] = function (block) {
  var dropdown_quantitative_var1_name = block.getFieldValue('quantitative_variable_1');
  var dropdown_categorical_var_name = block.getFieldValue('categorical_variable');
  var dropdown_data_name = block.getFieldValue('data');
  var code =
    'gf_dens(~' +
    dropdown_quantitative_var1_name +
    ', color = ~ ' +
    dropdown_categorical_var_name +
    ', data = ' +
    dropdown_data_name +
    ')\n';
  return code;
};
