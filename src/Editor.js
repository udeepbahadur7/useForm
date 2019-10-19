import React, { useState, useEffect } from "react";
import useInput from "./useInput";
import useDropdown from "./useDropdown";
import useMultiSelect from "./useMultiSelect";
import useRadioInput from "./useRadioInput";
import useCheckbox from "./useCheckbox";
import useMultipleCheckbox from "./useMultipleCheckbox";
import useTextarea from "./useTextarea";

const Editor = ({ submit }) => {
  const flavorOptions = [
    "Chocolate",
    "Double Chocolate",
    "Triple Chocolate",
    "Vanilla"
  ];
  const toppingsOptions = [
    "Sprinkles",
    "Fudge Sauce",
    "Strawberries",
    "Maple Syrup"
  ];

  const [NameInput, name, setName] = useInput("name");
  const [FlavorSelect, flavor, setFlavor] = useDropdown(
    flavorOptions.map(flavorOption => ({
      name: flavorOption,
      value: flavorOption
    })),
    "flavor",
    "Ice Cream Flavors",
    ""
  );
  const [ToppingMultiSelect, toppings, setToppings] = useMultiSelect(
    toppingsOptions.map(toppingOption => ({
      name: toppingOption,
      value: toppingOption
    })),
    "topping",
    "Ice Cream Toppings"
  );

  const [ToppingRadioInput, top, setTop] = useRadioInput(
    toppingsOptions,
    "top",
    "Select One Of the toppings"
  );
  const [TwoScoopCheckbox, twoScoop, setTwoScoop] = useCheckbox(
    "twoScoops",
    "Two Scoops"
  );

  const [
    ToppingMultipleCheckbox,
    toppingMultiple,
    setToppingMultiple
  ] = useMultipleCheckbox(
    toppingsOptions,
    "top",
    "Select Multiple Of the toppings"
  );

  const [OrderTextArea, order, setOrder] = useTextarea(
    "order",
    "Order Description"
  );
  useEffect(() => {
    submit({ name, flavor, toppings, top, twoScoop, toppingMultiple, order });
    // setting select on dependencies causes multiple rerender?
    // but why?
  }, [name, flavor, toppings, top, twoScoop, toppingMultiple, order]);

  return (
    <div className='h5 big-info text-dark p-2'>
      {NameInput}
      {FlavorSelect}
      {ToppingMultiSelect}

      <div className='h2'>Radio Input</div>

      {ToppingRadioInput}

      <div className='h2'>Toggle Checkbox</div>
      {TwoScoopCheckbox}

      <div className='h2'>Multi Checkbox</div>
      {ToppingMultipleCheckbox}
      {OrderTextArea}
    </div>
  );
};

export default Editor;
