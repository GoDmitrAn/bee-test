import { useState } from "react";
// import ReactSlider from "react-slider";
import {
  CheckIcon,
  CheckInput,
  FormMain,
  FormMainItem,
  Label,
  PriceBox,
  PriceValue,
  PriceValueItem,
  Producer,
  ProducerItem,
  StyledSlider,
  TypesBee,
} from "./FilterForm.styled";

export const FilterForm = () => {
  const [selectedTypesBee, setSelectedTypesBee] = useState([]);
  const [listBeesByHairiness, setListBeesByHairiness] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [rangeValues, setRangeValues] = useState([0, 100]);
  const [selectedProducer, setSelectedProducer] = useState([]);
  const allBeeTypes = ["bigIndianBee", "honeyBee", "indianBee", "arlicBee"];
  const allBeeTypesName = {
    bigIndianBee: "Большая индийская пчела",
    honeyBee: "Медоносная пчела",
    indianBee: "Индийская пчела",
    arlicBee: "Арликовая пчела",
  };
  const handleCheckboxChange = (event) => {
    const type = event.target.value;
    const isCheked = event.target.checked;
    if (isCheked) {
      setSelectedTypesBee((prevSelectedTypes) => [...prevSelectedTypes, type]);
    } else {
      setSelectedTypesBee((prevSelectedTypes) =>
        prevSelectedTypes.filter((prevType) => prevType !== type)
      );
    }
  };
  const handleProducerChange = (event) => {
    const type = event.target.value;
    const isCheked = event.target.checked;
    if (isCheked) {
      setSelectedProducer((prevSelectedTypes) => [...prevSelectedTypes, type]);
    } else {
      setSelectedProducer((prevSelectedTypes) =>
        prevSelectedTypes.filter((prevType) => prevType !== type)
      );
    }
  };
  const handleSelectedChange = (event) => {
    setListBeesByHairiness(
      Array.from(event.target.selectedOptions, (option) => option.value)
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Read the form data
    // const form = event.target;
    // const formData = new FormData(form);
  };
  const handleReset = () => {
    setListBeesByHairiness([]);
    setSelectedTypesBee([]);
  };
  const handleDelete = (event) => {
    const type = event.target.dataset.select;
    setListBeesByHairiness((prevSelectedTypes) =>
      prevSelectedTypes.filter((prevType) => prevType !== type)
    );
  };
  const toggleDropDownSelect = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <form method="post" onSubmit={handleSubmit}>
      <FormMain>
        <FormMainItem>
          <PriceBox>
            <PriceValue>
              <PriceValueItem>
                от
                <p>
                  <span>{rangeValues[0]}</span>
                  <span>$</span>
                </p>
              </PriceValueItem>
              <PriceValueItem>
                до
                <p>
                  <span>{rangeValues[1]}</span>
                  <span>$</span>
                </p>
              </PriceValueItem>
            </PriceValue>
            <StyledSlider
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="track"
              defaultValue={[0, 100]}
              onChange={(state) => setRangeValues(state)}
              value={rangeValues}
              ariaLabel={["Lower thumb", "Upper thumb"]}
              ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
              pearling
              minDistance={10}
            />
          </PriceBox>
          <TypesBee>
            {allBeeTypes.map((type, index) => {
              return (
                <li key={type}>
                  <Label>
                    <CheckInput
                      type="checkbox"
                      value={type}
                      name="typesBee"
                      onClick={handleCheckboxChange}
                    />
                    <CheckIcon size="2rem" />
                    <span> {allBeeTypesName[type]}</span>
                  </Label>
                </li>
              );
            })}
          </TypesBee>
        </FormMainItem>
        <FormMainItem>
          <Producer>
            <ProducerItem>
              <Label>
                <CheckInput
                  type="checkbox"
                  name="producer"
                  value="option1"
                  onClick={handleProducerChange}
                  className="producer"
                />
                <CheckIcon size="2rem" />
                <span>Option 1</span>
              </Label>
            </ProducerItem>
            <ProducerItem>
              <Label>
                <CheckInput
                  type="checkbox"
                  name="producer"
                  value="option2"
                  onClick={handleProducerChange}
                  className="producer"
                />
                <CheckIcon size="2rem" />
                <span>Option 2</span>
              </Label>
            </ProducerItem>
            <ProducerItem>
              <Label>
                <CheckInput
                  type="checkbox"
                  name="producer"
                  value="option3"
                  onClick={handleProducerChange}
                  className="producer"
                />
                <CheckIcon size="2rem" />
                <span>Option 3</span>
              </Label>
            </ProducerItem>
          </Producer>
        </FormMainItem>
        <FormMainItem></FormMainItem>
      </FormMain>

      <div>
        <div>
          <ul style={{ maxWidth: "300px", height: "30px", background: "#fff" }}>
            {listBeesByHairiness.map((item) => {
              return (
                <li key={item}>
                  <button
                    type="button"
                    data-select={item}
                    onClick={handleDelete}
                  >
                    del
                  </button>
                  {item}
                </li>
              );
            })}
          </ul>
          <button type="button" onClick={toggleDropDownSelect}>
            open
          </button>
        </div>
        {isDropDownOpen && (
          <select
            name="beeTypes"
            multiple={true}
            value={listBeesByHairiness}
            onChange={handleSelectedChange}
          >
            {allBeeTypes.map((type) => (
              <option
                key={type}
                value={type}
                disabled={selectedTypesBee.includes(type) ? false : true}
              >
                {allBeeTypesName[type]}
              </option>
            ))}
          </select>
        )}
      </div>
      <div>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Option 3
        </label>
        <label>
          <input type="radio" name="myRadio" value="option4" />
          Option 4
        </label>
        <label>
          <input type="radio" name="myRadio" value="option5" />
          Option 5
        </label>
        <label>
          <input type="radio" name="myRadio" value="option6" />
          Option 6
        </label>
      </div>
      <div>
        <button type="submit">Отправить</button>
        <button type="reset" onClick={handleReset}>
          Сбросить
        </button>
      </div>
    </form>
  );
};
