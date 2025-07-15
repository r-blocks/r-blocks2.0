import Blockly from 'blockly';
import { quantitative_vars } from '../../constants';

/**
 * Geom_histogram block definition with dropdown menus for HELPrct dataset
 */
Blockly.Blocks['geom_histogram'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_histogram(mapping = aes(x =')
      .appendField(new Blockly.FieldDropdown(quantitative_vars), 'x_axis')
      .appendField('), binwidth =')
      .appendField(
        new Blockly.FieldDropdown([
          ['5', '5'],
          ['10', '10'],
          ['20', '20'],
          ['30', '30'],
          ['1', '1'],
        ]),
        'binwidth'
      )
      .appendField(', fill =')
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
    this.setTooltip('Creates a histogram using ggplot2');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_histogram.html');
  },
};

/**
 * Generator for geom_histogram block
 */
Blockly.JavaScript['geom_histogram'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var binwidth = block.getFieldValue('binwidth');
  var fill = block.getFieldValue('fill');

  var code =
    'geom_histogram(mapping = aes(x = ' +
    x_axis +
    '), binwidth = ' +
    binwidth +
    ', fill = ' +
    fill +
    ', data = HELPrct)\n';

  return code;
};

/**
 * Generic geom_histogram block definition with text inputs
 */
Blockly.Blocks['Ggeom_histogram'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_histogram(mapping = aes(x =')
      .appendField(new Blockly.FieldTextInput(''), 'x_axis')
      .appendField('), binwidth =')
      .appendField(new Blockly.FieldTextInput('10'), 'binwidth')
      .appendField(', fill =')
      .appendField(new Blockly.FieldTextInput('steelblue'), 'fill')
      .appendField(', data = HELPrct)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a histogram using ggplot2 with custom inputs');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_histogram.html');
  },
};

/**
 * Generator for generic geom_histogram block
 */
Blockly.JavaScript['Ggeom_histogram'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var binwidth = block.getFieldValue('binwidth');
  var fill = block.getFieldValue('fill');

  // Add quotes to string values if they don't have them
  fill = fill.startsWith('"') ? fill : '"' + fill + '"';

  var code =
    'geom_histogram(mapping = aes(x = ' +
    x_axis +
    '), binwidth = ' +
    binwidth +
    ', fill = ' +
    fill +
    ', data = HELPrct)\n';

  return code;
};

export default {};
