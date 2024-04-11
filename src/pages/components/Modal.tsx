/* eslint-disable max-lines */
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddIcon from "../icons/addIcon";
import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "30px",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Transaction = {
  amount: number;
  category: string;
  createdAt: Date | string;
  note: string;
  incomeTitle: string;
  transactionType: string;
  __v: number;
  _id: string;
};

export const RecordModal = ({ edit, transaction }: {edit: boolean, transaction?: Transaction}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("income");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  const [time, setTime] = useState("");
  const [categoryType, setCategoryType] = useState("");

  const records = async () => {
    try {
      const result = await axios.post(
        "https://transaction-backend-resb.onrender.com/create-transaction",
        {
          category: categoryType,
          amount,
          createdAt: time,
          note,
          transactionType,
        }
      );
      console.log(result);
      if (result.statusText === "OK") {
        router.push("/records");
        handleModalClose();
      }
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };
  const editRecord = async () => {
    try {
      const result = await axios.post(
        `https://transaction-backend-resb.onrender.com/update-transaction/?transactionId=${transaction?._id}`,
        {
          category: categoryType,
          amount,
          createdAt: time,
          note,
          transactionType,
        }
      );
      console.log(result);
      if (result.statusText === "OK") {
        router.push("/records");
        handleModalClose();
      }
    } catch (error) {
      console.error("Error adding record:", error);
    }
  }

  console.log(transactionType, note, amount, time);

  const handleChange = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setTransactionType(type);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <div className="addicon">
      <div onClick={handleModalOpen}>{edit ? <EditIcon /> : <AddIcon />}</div>
      <Modal open={open} onClose={handleModalClose}>
        <Box sx={style}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="AddRecord">Add Record</div>
            </div>
            <div style={{ display: "flex" }}>
              <div className="Style3">
                <ToggleButtonGroup
                  color="primary"
                  value={transactionType}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton value="income" className="IncomeButton">
                    Income
                  </ToggleButton>
                  <div style={{ paddingLeft: "30x" }}>
                    <ToggleButton value="expense" className="ExpenseButton">
                      Expense
                    </ToggleButton>
                  </div>
                </ToggleButtonGroup>
                <input
                  className="AmountInput"
                  placeholder="Amount"
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: "10px",
                  }}
                >
                  <p style={{ fontFamily: "sans-serif" }}> Category </p>
                  <div className="Style4"></div>
                  <select
                    onChange={(e) => setCategoryType(e.target.value)}
                    style={{
                      width: "375  px",
                      height: "48px",
                      display: "flex",
                    }}
                  >
                    <option value="food">Food & Drinks</option>
                    <option value="shopping">Shopping</option>
                    <option value="bills">Bills</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Vechile</option>
                    <option value="shopping">Life & Entertaiment</option>
                    <option value="bills">Communication, Pc</option>
                    <option value="clothing">Financial expenses</option>
                    <option value="shopping">Investments</option>
                    <option value="bills">Income</option>
                    <option value="clothing">Others</option>
                  </select>
                </div>
                <div
                  style={{
                    fontFamily: "sans-serif",
                    paddingTop: "20px",
                    paddingLeft: "30px",
                  }}
                >
                  Date
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <input
                    type="date"
                    style={{ width: "168px", height: "48px" }}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                {!edit ? (
                  <>
                    <button className="AddButton" onClick={records}>
                      Add Record
                    </button>
                  </>
                ) : (
                  <>
                    <button className="AddButton" onClick={editRecord}>
                      Edit Record
                    </button>
                  </>
                )}
              </div>
              <div style={{ paddingLeft: "70px" }}>
                <div className="style1">
                  <h3 className="NoteStyle"> Note</h3>
                  <div className="Style2">
                    <input
                      className="NoteInput"
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Write here"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
