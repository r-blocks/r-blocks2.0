import Blockly from 'blockly';
import { categorical_vars, quantitative_vars } from '../../constants';

/**
 * Geom_violin block definition with dropdown menus for HELPrct dataset
 */
Blockly.Blocks['geom_violin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_violin(mapping = aes(x =')
      .appendField(new Blockly.FieldDropdown(categorical_vars), 'x_axis')
      .appendField(', y =')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'y_axis')
      .appendField('), fill =')
      .appendField(
        new Blockly.FieldDropdown([
          ['blue', '"blue"'],
          ['red', '"red"'],
          ['green', '"green"'],
          ['steelblue', '"steelblue"'],
          ['orange', '"orange"'],
        ]),
        'fill'
      )
      .appendField(', data = HELPrct)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a violin plot using ggplot2');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_violin.html');
  },
};

/**
 * Generator for geom_violin block
 */
Blockly.JavaScript['geom_violin'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var y_axis = block.getFieldValue('y_axis');
  var fill = block.getFieldValue('fill');

  var code =
    'geom_violin(mapping = aes(x = ' +
    x_axis +
    ', y = ' +
    y_axis +
    '), fill = ' +
    fill +
    ', data = HELPrct)\n';

  return code;
};

/**
 * Generic geom_violin block definition with text inputs
 */
Blockly.Blocks['Ggeom_violin'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_violin(mapping = aes(x =')
      .appendField(new Blockly.FieldTextInput(''), 'x_axis')
      .appendField(', y =')
      .appendField(new Blockly.FieldTextInput(''), 'y_axis')
      .appendField('), fill =')
      .appendField(new Blockly.FieldTextInput('steelblue'), 'fill')
      .appendField(', data = HELPrct)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a violin plot using ggplot2 with custom inputs');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_violin.html');
  },
};

/**
 * Generator for generic geom_violin block
 */
Blockly.JavaScript['Ggeom_violin'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var y_axis = block.getFieldValue('y_axis');
  var fill = block.getFieldValue('fill');

  // Add quotes to string values if they don't have them
  fill = fill.startsWith('"') ? fill : '"' + fill + '"';

  var code =
    'geom_violin(mapping = aes(x = ' +
    x_axis +
    ', y = ' +
    y_axis +
    '), fill = ' +
    fill +
    ', data = HELPrct)\n';

  return code;
};

export default {};
