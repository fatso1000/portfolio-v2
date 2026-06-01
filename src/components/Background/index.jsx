import React from "react";

/**
 * Frutiger Aero background: fixed sun glow + six floating glossy bubbles.
 * Pure decorative — sits behind the app-container, doesn't capture input.
 */
export const Background = () => {
  return (
    <div className="aero-background" aria-hidden="true">
      <div className="aero-bg__sun" />
      <div className="aero-bg__bubble aero-bg__bubble--1" />
      <div className="aero-bg__bubble aero-bg__bubble--2" />
      <div className="aero-bg__bubble aero-bg__bubble--3" />
      <div className="aero-bg__bubble aero-bg__bubble--4" />
      <div className="aero-bg__bubble aero-bg__bubble--5" />
      <div className="aero-bg__bubble aero-bg__bubble--6" />
    </div>
  );
};
