import Blockly from 'blockly';
import { quantitative_vars, categorical_vars } from '../../constants';

/**
 * Geom_point block definition with dropdown menus for HELPrct dataset
 */
Blockly.Blocks['geom_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_point(mapping = aes(x =')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'x_axis')
      .appendField(', y =')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'y_axis')
      .appendField('), color =')
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
    this.setTooltip('Creates a scatter plot using ggplot2');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_point.html');
  },
};

/**
 * Generator for geom_point block
 */
Blockly.JavaScript['geom_point'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var y_axis = block.getFieldValue('y_axis');
  var color = block.getFieldValue('color');

  var code =
    'geom_point(mapping = aes(x = ' +
    x_axis +
    ', y = ' +
    y_axis +
    '), color = ' +
    color +
    ', data = HELPrct)\n';

  return code;
};

/**
 * Generic geom_point block definition with text inputs
 */
Blockly.Blocks['Ggeom_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_point(mapping = aes(x =')
      .appendField(new Blockly.FieldTextInput(''), 'x_axis')
      .appendField(', y =')
      .appendField(new Blockly.FieldTextInput(''), 'y_axis')
      .appendField('), color =')
      .appendField(new Blockly.FieldTextInput('blue'), 'color')
      .appendField(', data = HELPrct)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a scatter plot using ggplot2 with custom inputs');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_point.html');
  },
};

/**
 * Generator for generic geom_point block
 */
Blockly.JavaScript['Ggeom_point'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var y_axis = block.getFieldValue('y_axis');
  var color = block.getFieldValue('color');

  // Add quotes to string values if they don't have them
  color = color.startsWith('"') ? color : '"' + color + '"';

  var code =
    'geom_point(mapping = aes(x = ' +
    x_axis +
    ', y = ' +
    y_axis +
    '), color = ' +
    color +
    ', data = HELPrct)\n';

  return code;
};

export default {};
