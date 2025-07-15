import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

/**
 * Geom_line block definition for HELPrct dataset with dropdown menus
 */
Blockly.Blocks['geom_line'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_line(mapping = aes(x =')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'x_axis')
      .appendField(', y =')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'y_axis')
      .appendField('), linetype =')
      .appendField(
        new Blockly.FieldDropdown([
          ['solid', '"solid"'],
          ['dashed', '"dashed"'],
          ['dotted', '"dotted"'],
          ['dotdash', '"dotdash"'],
          ['longdash', '"longdash"'],
        ]),
        'line_type'
      )
      .appendField(', color =')
      .appendField(
        new Blockly.FieldDropdown([
          ['blue', '"blue"'],
          ['red', '"red"'],
          ['green', '"green"'],
          ['black', '"black"'],
          ['purple', '"purple"'],
        ]),
        'color'
      )
      .appendField(', data = HELPrct)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a line plot using ggplot2 with HELPrct dataset');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_line.html');
  },
};

/**
 * Generator for geom_line block
 */
Blockly.JavaScript['geom_line'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var y_axis = block.getFieldValue('y_axis');
  var line_type = block.getFieldValue('line_type');
  var color = block.getFieldValue('color');

  var code =
    'geom_line(mapping = aes(x = ' +
    x_axis +
    ', y = ' +
    y_axis +
    '), linetype = ' +
    line_type +
    ', color = ' +
    color +
    ', data = HELPrct)\n';

  return code;
};

export default {};
