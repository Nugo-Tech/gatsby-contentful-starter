import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";

import { StaticImage } from "gatsby-plugin-image";
import db from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { toast } from "react-toastify";

const FormEditor = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    questions: [
      {
        text: "Name",
        required: true,
        questionType: "text",
        options: [], // Add options array
      },
      {
        text: "Email",
        required: true,
        questionType: "text",
        options: [],
      },
      {
        text: "Phone Number",
        required: false,
        questionType: "text",
        options: [],
      },
    ],
  });

  const handleTitleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleQuestionChange = (e, index) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index].text = e.target.value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleQuestionTypeChange = (e, index) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index].questionType = e.target.value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        { text: "", required: false, questionType: "text", options: [] },
      ],
    });
  };

  const removeQuestion = (index) => {
    if (formData.questions.length === 1) return;
    const updatedQuestions = [...formData.questions];
    updatedQuestions.splice(index, 1);
    setFormData({ ...formData, questions: updatedQuestions });
  };

  // Function to handle option change
  const handleOptionChange = (e, questionIndex, optionIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options[optionIndex] = e.target.value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  // Function to remove an option
  const removeOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options.splice(optionIndex, 1);
    setFormData({ ...formData, questions: updatedQuestions });
  };

  // Function to add an option
  const addOption = (questionIndex) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].options.push("");
    setFormData({ ...formData, questions: updatedQuestions });
  };

  // Save form data to Firestore
  const saveForm = async () => {
    try {
      const docRef = await addDoc(collection(db, "forms"), {
        title: formData.title,
        description: formData.description,
        questions: formData.questions,
      });
      console.log("Document written with ID: ", docRef.id);
      toast.success("Form saved successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div className="bg-blue-50 py-4 min-h-screen">
      <form
        className="max-w-4xl mx-auto p-6 bg-white rounded shadow flex flex-col mb-4"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* Image header */}
        <div>
          <StaticImage
            src="../../images/header.jpg"
            alt="Form Header"
            className="w-full h-64 object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mt-10 mb-4">Create Form</h1>
        <input
          type="text"
          placeholder="Form Title"
          value={formData.title}
          onChange={handleTitleChange}
          className={`w-full border rounded px-3 py-2 mb-4`}
        />
        <textarea
          placeholder="Form Description"
          value={formData.description}
          onChange={handleDescriptionChange}
          className={`w-full border rounded px-3 py-2 mb-4`}
        />
        {/* Questions */}
        {formData.questions.map((question, index) => (
          <div
            key={index}
            className="mt-4 flex flex-col items-center gap-2 
  px-3 draggablerounded py-2 relative bg-white shadow-md border-2 border-gray-300
"
          >
            <div className={`flex w-full gap-5`}>
              <div className={`flex w-full border-b-2`}>
                <div
                  className={`ml-2 mt-2 text-red-500 ${
                    question.required ? "block" : "hidden"
                  }`}
                >
                  *
                </div>

                <input
                  type="text"
                  required
                  value={question.text}
                  onChange={(e) => handleQuestionChange(e, index)}
                  placeholder={`Question ${index + 1}`}
                  className={`w-full rounded py-2 mr-2 ${
                    question.required ? "px-1" : "px-3"
                  }`}
                />
              </div>
              {/* Question type dropdown */}
              <div className="flex items-center mt-2 border">
                <select
                  value={question.questionType}
                  onChange={(e) => handleQuestionTypeChange(e, index)}
                  className="py-3 px-10"
                >
                  <option value="text">Short Answer</option>
                  <option value="textarea">Long Answer</option>
                  <option value="checkbox">Checkbox</option>
                </select>
              </div>
            </div>

            {/* Options for checkbox questions */}
            {question.questionType === "checkbox" && (
              <div className="flex flex-col gap-2 w-full px-4">
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="flex items-center w-full hover:border-b-2 py-1"
                  >
                    {/* Checkbox Icon */}
                    <MdOutlineRadioButtonUnchecked />

                    <input
                      type="text"
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(e, index, optionIndex)
                      }
                      className="px-2 py-1 mr-2  w-full"
                      placeholder="Option"
                    />
                    <button
                      onClick={() => removeOption(index, optionIndex)}
                      className="hover:bg-gray-50 p-3 rounded-full"
                    >
                      <TfiClose />
                    </button>
                  </div>
                ))}
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    addOption(index);
                  }}
                  className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-gray-700 w-full text-sm mt-2"
                >
                  + Add Option
                </div>
              </div>
            )}

            {/* Required star */}
            <div className="flex self-end">
              <div key={index} className="mt-4 flex items-center gap-2">
                <button
                  className="hover:bg-gray-50 p-3 rounded-full"
                  onClick={() => removeQuestion(index)}
                >
                  {/* Mui Trash Icon */}
                  <FaRegTrashAlt />
                </button>

                {/* Horizontal Separator */}
                <div className="w-1 h-8 border-r border-gray-300 ml-1 mr-6"></div>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={question.required}
                    onChange={() => {
                      const updatedQuestions = [...formData.questions];
                      updatedQuestions[index].required =
                        !updatedQuestions[index].required;
                      setFormData({ ...formData, questions: updatedQuestions });
                    }}
                    className="hidden"
                  />

                  <span className="mr-4">Required</span>
                  <div
                    className={`relative w-10 h-3 flex items-center rounded-full p-1 ${
                      question.required ? "bg-blue-200" : "bg-gray-400"
                    }`}
                  >
                    <div
                      className={`absolute left-0 w-6 h-6 rounded-full shadow-xl border transition-transform transform ${
                        question.required
                          ? "translate-x-4 bg-blue-500"
                          : "translate-x-0 bg-[#fafafa]"
                      }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        ))}

        {/* Add Questions */}
        <button
          onClick={addQuestion}
          className="text-sm text-gray-600 py-2 px-4 rounded mt-4 border border-2 border-dashed border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all ease-in-out duration-100 "
        >
         + Add Question
        </button>
        <div className="self-end">
          <button
            onClick={(e) => {
              e.preventDefault();
              saveForm();
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mt-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-green-500 w-60"
            disabled={
              !formData.title ||
              !formData.description ||
              !formData.questions.length
            }
          >
            Save Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormEditor;
