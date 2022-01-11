import React from "react";
import { shallow } from "enzyme";
import { render, screen, fireEvent, userEvent } from '@testing-library/react';
import RightSegment from './RightSegment';
import TestRenderer from 'react-test-renderer';
describe("RightSegment component ", () => {

  it("is RightSegment being rendered", () => {
    const { container } = render(<RightSegment />);
    expect(container.getElementsByClassName('right-section').length).toBe(1);
  })
  it('is the button NEW FEATURES working', () => {
    window.open = jest.fn();
    render(<RightSegment />);
    const add = screen.getByText(/NEW FEATURES/).closest("button");
    fireEvent.click(add)
    expect(window.open).toHaveBeenCalledWith('https://www.episilia.com/features');
  })
  it('is the link learn more working ', () => {
    render(<RightSegment />);
    const add = screen.getByText(/LEARN MORE/)
    expect(add).toHaveAttribute('href', 'https://www.episilia.com/features')

  })
  it('is the title present ', () => {
    render(<RightSegment />);
    const add = screen.getByText(/Familiar Grafana UI/)
    expect(add).toBeInTheDocument()
  })
  it('is the content present ', () => {
    render(<RightSegment />);
    const add = screen.getByText(/Episilia is integrated with grafana log browser/)
    expect(add).toBeInTheDocument()
  })
})