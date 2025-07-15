import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

/**
 * ggplot initialization block definition with dropdown menus for HELPrct
 */
Blockly.Blocks['ggplot_init'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('ggplot(data = HELPrct, mapping = aes(x =')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'x_var')
      .appendField(', y =')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'y_var')
      .appendField(')) +');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Initialize a ggplot with HELPrct dataset');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/ggplot.html');
  },
};

/**
 * Generator for ggplot initialization block
 */
Blockly.JavaScript['ggplot_init'] = function (block) {
  var x_var = block.getFieldValue('x_var');
  var y_var = block.getFieldValue('y_var');

  var code = 'ggplot(data = HELPrct, mapping = aes(x = ' + x_var + ', y = ' + y_var + ')) +\n';

  return code;
};

export default {};
