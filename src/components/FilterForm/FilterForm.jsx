import { useState } from "react";

import {
  CheckIcon,
  CheckInput,
  DeleteFromSelected,
  FormMain,
  FormMainItem,
  Label,
  PriceBox,
  PriceValue,
  PriceValueItem,
  Producer,
  ProducerItem,
  Select,
  SelectWrapper,
  SelectedList,
  SonyIcon,
  StyledSlider,
  TitleBox,
  ToggleButtonSelectBee,
  TypesBee,
} from "./FilterForm.styled";
import StarRating from "components/StarRating/StarRating";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";

export const FilterForm = () => {
  const [selectedTypesBee, setSelectedTypesBee] = useState([]);
  const [listBeesByHairiness, setListBeesByHairiness] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [rangeValues, setRangeValues] = useState([0, 100]);
  const [selectedProducer, setSelectedProducer] = useState([]);
  const [rating, setRating] = useState(0);
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
    const type = event.currentTarget.dataset.select;
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
            <TitleBox>Цена</TitleBox>
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
          <div>
            <TitleBox>Вид пчел</TitleBox>
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
          </div>
        </FormMainItem>
        <FormMainItem>
          <div>
            <TitleBox>Рейтинг пчел</TitleBox>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <Producer>
            <TitleBox>Выбрать производителя</TitleBox>
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
                <span>
                  <SonyIcon viewBox="8 7 8 10" />
                </span>
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
                <span>
                  <SonyIcon viewBox="8 7 8 10" />
                </span>
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
                <span>
                  <SonyIcon viewBox="8 7 8 10" />
                </span>
              </Label>
            </ProducerItem>
          </Producer>
        </FormMainItem>
        <FormMainItem>
          <div>
            <TitleBox>Волосатость брюшка пчелы</TitleBox>
            <div style={{ position: "relative" }}>
              <SelectWrapper>
                <SelectedList>
                  {listBeesByHairiness.map((item) => {
                    return (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginRight: "15px",
                        }}
                      >
                        <DeleteFromSelected
                          type="button"
                          data-select={item}
                          onClick={handleDelete}
                        >
                          <GrFormClose viewBox="4 7 14 26" />
                        </DeleteFromSelected>
                        <span> {allBeeTypesName[item]}</span>
                      </li>
                    );
                  })}
                </SelectedList>
                <ToggleButtonSelectBee
                  type="button"
                  onClick={toggleDropDownSelect}
                >
                  <IoMdArrowDropdown
                    size="1.5rem"
                    style={{ marginLeft: "auto" }}
                  />
                </ToggleButtonSelectBee>
              </SelectWrapper>
              {isDropDownOpen && (
                <Select
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
                      style={{ marginBottom: "5px" }}
                    >
                      {allBeeTypesName[type]}
                    </option>
                  ))}
                </Select>
              )}
            </div>
          </div>
        </FormMainItem>
      </FormMain>

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