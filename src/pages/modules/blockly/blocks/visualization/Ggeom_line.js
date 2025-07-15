import Blockly from 'blockly';

/**
 * Ggeom_line block definition with text inputs
 */
Blockly.Blocks['Ggeom_line'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_line(mapping = aes(x =')
      .appendField(new Blockly.FieldTextInput(''), 'x_axis')
      .appendField(', y =')
      .appendField(new Blockly.FieldTextInput(''), 'y_axis')
      .appendField('), linetype =')
      .appendField(new Blockly.FieldTextInput('solid'), 'line_type')
      .appendField(', color =')
      .appendField(new Blockly.FieldTextInput('blue'), 'color')
      .appendField(', data = HELPrct)');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a line plot using ggplot2 with custom inputs');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/geom_line.html');
  },
};

/**
 * Generator for Ggeom_line block
 */
Blockly.JavaScript['Ggeom_line'] = function (block) {
  var x_axis = block.getFieldValue('x_axis');
  var y_axis = block.getFieldValue('y_axis');
  var line_type = block.getFieldValue('line_type');
  var color = block.getFieldValue('color');

  // Add quotes to string values if they don't have them
  line_type = line_type.startsWith('"') ? line_type : '"' + line_type + '"';
  color = color.startsWith('"') ? color : '"' + color + '"';

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
