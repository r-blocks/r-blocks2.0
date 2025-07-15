import Blockly from 'blockly';

/**
 * Generic ggplot initialization block definition with text inputs
 */
Blockly.Blocks['Gggplot_init'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('ggplot(data =')
      .appendField(new Blockly.FieldTextInput('HELPrct'), 'data')
      .appendField(', mapping = aes(x =')
      .appendField(new Blockly.FieldTextInput(''), 'x_var')
      .appendField(', y =')
      .appendField(new Blockly.FieldTextInput(''), 'y_var')
      .appendField(')) +');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Initialize a ggplot with custom dataset and variables');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/ggplot.html');
  },
};

/**
 * Generator for generic ggplot initialization block
 */
Blockly.JavaScript['Gggplot_init'] = function (block) {
  var data = block.getFieldValue('data');
  var x_var = block.getFieldValue('x_var');
  var y_var = block.getFieldValue('y_var');

  var code = 'ggplot(data = ' + data + ', mapping = aes(x = ' + x_var + ', y = ' + y_var + ')) +\n';

  return code;
};

export default {};
