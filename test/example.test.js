// IMPORT MODULES under test here:
import { renderGame, renderTeam } from '../render-utils.js';  
const test = QUnit.test;

test('Test should show div', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="game"><div class="team"><p class="name"></p><p class="score"></p></div><div class="team"><p class="name"></p><p class="score"></p></div></div>'
    ;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame('name1');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});
test('Test should show div for team', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<div class="team"><p class="name">nameDiv</p><p class="score"></p></div>';

    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam('nameDiv');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});
