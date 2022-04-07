// @ts-nocheck
import { isSchema } from '../../src/utils/common';

describe('test isSchema from utils/common ', () => {
  it('should be false when empty value is passed', () => {
    expect(isSchema(null)).toBeFalsy();
    expect(isSchema(undefined)).toBeFalsy();
    expect(isSchema('')).toBeFalsy();
    expect(isSchema({})).toBeFalsy();
  });

  it('should be true when componentName is Leaf or Slot ', () => {
    expect(isSchema({ componentName: 'Leaf' })).toBeTruthy();
    expect(isSchema({ componentName: 'Slot' })).toBeTruthy();
  });

  it('should check each item of an array', () => {
    const validArraySchema = [
      { componentName: 'Button', props: {}},
      { componentName: 'Button', props: { type: 'JSExpression' }},
      { componentName: 'Leaf' },
      { componentName: 'Slot'},
    ];
    const invalidArraySchema = [
      ...validArraySchema,
      { componentName: 'ComponentWithoutProps'},
    ];
    expect(isSchema(validArraySchema)).toBeTruthy();
    expect(isSchema(invalidArraySchema)).toBeFalsy();
  });

  it('normal valid schema should contains componentName, and props of type object or JSExpression', () => {
    expect(isSchema({ componentName: 'Button', props: {}})).toBeTruthy();
    expect(isSchema({ componentName: 'Button', props: { type: 'JSExpression' }})).toBeTruthy();
    expect(isSchema({ xxxName: 'Button'})).toBeFalsy();
    expect(isSchema({ componentName: 'Button', props: null})).toBeFalsy();
    expect(isSchema({ componentName: 'Button', props: []})).toBeFalsy();
    expect(isSchema({ componentName: 'Button', props: 'props string'})).toBeFalsy();
  });
});
