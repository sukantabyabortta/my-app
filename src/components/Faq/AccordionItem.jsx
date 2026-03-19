const AccordionItem = ({ question, answer, open, onClick }) => {
  return (
    <div className="acc_wrap">
      <div
        className={`custom_acc_trigger ${open ? "current" : ""}`}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      >
        {question}
        <span className="icon">{open ? "-" : "+"}</span>
      </div>

      <div className={`custom_acc_container ${open ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;