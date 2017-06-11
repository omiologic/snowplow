import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { shallow } from 'enzyme';

import Card from '../Card';

describe('Card UI Component', () => {
	it('should contain child elements', () => {
		const component = shallow(
			<Card>
				<div>Test</div>
			</Card>
		);
		expect(component.contains('Test')).to.equal(true);
	});
});
