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
  ClothesType,
  TypesBee,
  SubmitResetBtn,
  BottomBox,
  TypesBeeWrapper,
  StarWrapper,
  BeesHairlessWrap,
  ClothWrapper,
} from "./FilterForm.styled";
import StarRating from "components/StarRating/StarRating";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrFormClose } from "react-icons/gr";
import { GiArmoredPants } from "react-icons/gi";
import { GiSleevelessJacket } from "react-icons/gi";
import { GiPirateCoat } from "react-icons/gi";
import { GiSonicShoes } from "react-icons/gi";
import { GiSwimfins } from "react-icons/gi";
import { GiJesterHat } from "react-icons/gi";

export const FilterForm = () => {
  const [selectedTypesBee, setSelectedTypesBee] = useState([]);
  const [listBeesByHairiness, setListBeesByHairiness] = useState([]);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [rangeValues, setRangeValues] = useState([0, 100]);
  const [selectedProducer, setSelectedProducer] = useState([]);
  const [rating, setRating] = useState(0);
  const [clothType, setClothType] = useState(null);
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
  const handleClothChange = (event) => {
    const value = event.target.value;
    setClothType(value);
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
    setRating(0);
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
          <TypesBeeWrapper>
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
          </TypesBeeWrapper>
        </FormMainItem>
        <FormMainItem>
          <StarWrapper>
            <TitleBox>Рейтинг пчел</TitleBox>
            <StarRating rating={rating} setRating={setRating} />
          </StarWrapper>
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
          <BeesHairlessWrap>
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
                          <GrFormClose
                            viewBox="4 7 14 26"
                            className="delete-icon"
                          />
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
          </BeesHairlessWrap>
          <ClothWrapper>
            <TitleBox style={{ marginBottom: "10px" }}>
              Выбрать тип одежды
            </TitleBox>
            <ClothesType>
              <Label>
                <input
                  type="radio"
                  name="cloth"
                  value="option1"
                  className="cloth"
                  onClick={handleClothChange}
                />
                <GiArmoredPants
                  className="cloth-icon"
                  viewBox="-60 0 612 512"
                />
              </Label>
              <Label>
                <input
                  type="radio"
                  name="cloth"
                  value="option2"
                  className="cloth"
                  onClick={handleClothChange}
                />
                <GiSleevelessJacket
                  className="cloth-icon"
                  viewBox="-60 0 612 512"
                />
              </Label>
              <Label>
                <input
                  type="radio"
                  name="cloth"
                  value="option3"
                  className="cloth"
                  onClick={handleClothChange}
                />
                <GiPirateCoat className="cloth-icon" viewBox="-60 0 612 512" />
              </Label>
              <Label>
                <input
                  type="radio"
                  name="cloth"
                  value="option4"
                  className="cloth"
                  onClick={handleClothChange}
                />
                <GiSonicShoes className="cloth-icon" viewBox="-60 0 612 512" />
              </Label>
              <Label>
                <input
                  type="radio"
                  name="cloth"
                  value="option5"
                  className="cloth"
                  onClick={handleClothChange}
                />
                <GiSwimfins className="cloth-icon" viewBox="-60 0 612 512" />
              </Label>
              <Label>
                <input
                  type="radio"
                  name="cloth"
                  value="option6"
                  className="cloth"
                  onClick={handleClothChange}
                />
                <GiJesterHat className="cloth-icon" viewBox="-60 0 612 512" />
              </Label>
            </ClothesType>
          </ClothWrapper>
        </FormMainItem>
      </FormMain>

      <BottomBox>
        <SubmitResetBtn
          type="submit"
          style={{ marginRight: "105px" }}
          disabled={
            selectedTypesBee.length === 0 ||
            selectedProducer.length === 0 ||
            listBeesByHairiness.length === 0 ||
            clothType === null ||
            rating === 0
              ? true
              : false
          }
        >
          Отправить
        </SubmitResetBtn>
        <SubmitResetBtn type="reset" onClick={handleReset}>
          Сбросить
        </SubmitResetBtn>
      </BottomBox>
    </form>
  );
};
