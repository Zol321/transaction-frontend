import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddIcon from "../icons/addIcon";
import { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 820,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const RecordModal = () => {
  const [open, setOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("income");

  const handleChange = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setTransactionType(type);
  };

  const handleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="addicon">
      <div onClick={handleModal}>
        <AddIcon />
      </div>
      <Modal open={open} onClose={handleModal}>
        <Box sx={style}>
          <ToggleButtonGroup
            color="primary"
            value={transactionType}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="AddRecord">Add Record</div>
              </div>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "424px",
                    height: "444px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "15px",
                    }}
                  >
                    <ToggleButton value="income" className="IncomeButton">
                      Income
                    </ToggleButton>
                    <ToggleButton value="expense" className="ExpenseButton">
                      Expense
                    </ToggleButton>
                  </div>
                  Amount
                  <input className="AmountInput" placeholder="" />
                  Category
                </div>
                <div
                  style={{
                    width: "424px",
                    height: "444px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "15px",
                    }}
                  ></div>

                  <h3
                    style={{
                      fontFamily: "sans-serif",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Note
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "   5px",
                    }}
                  >
                    <input
                      style={{
                        width: "348px",
                        height: "280px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      placeholder="Write here"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ToggleButtonGroup>
        </Box>
      </Modal>
    </div>
  );
};
