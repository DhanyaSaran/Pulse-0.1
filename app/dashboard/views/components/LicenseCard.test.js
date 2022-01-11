import React from "react";
import { render, screen, act } from '@testing-library/react';
import LicenseCard from './LicenseCard';

describe("licenseCard component", () => {
  const property = {
    companyName: "episilia",
    licenseId: "ep12895767",
    planName: "commuity Plan",
    daysLeft: 80,
    isActive: true
  }

  it("is companyName updated in LicenseCard", () => {
    act(() => {
      render(<LicenseCard {...property} />)
      expect(screen.getByText(/episilia/)).toBeInTheDocument()
    })
  })


  it("is planName updated in LicenseCard", () => {
    act(() => {
      render(<LicenseCard {...property} />)
      expect(screen.getByText(/commuity Plan/)).toBeInTheDocument()

    })
  })

  it("is daysLeft updated in LicenseCard", () => {
    act(() => {
      render(<LicenseCard {...property} />)
      expect(screen.getByText(/80/)).toBeInTheDocument()

    })
  })

  it("is isActive updated in LicenseCard", () => {
    act(() => {
      render(<LicenseCard {...property} />)
      expect(screen.getByText(/Active/)).toBeInTheDocument()
    })
  })
})