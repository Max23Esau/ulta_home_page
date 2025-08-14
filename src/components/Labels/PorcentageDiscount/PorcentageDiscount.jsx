const styles = {
  position: "absolute",
  left: "0%",
  top: "0%",
  fontWeight: "600",
  backgroundColor: "#fdf1f3",
  color: "#cc0058",
  textTransform: "initial",
  textAlign: "left",
  width: "max-content",
  fontSize: "var(--font-size-12px)",
  padding: "0 var(--spacing-5px)",
  margin: "0 var(--spacing-5px) var(--spacing-5px) 0",
};


const PorcentageDiscount = ({discount}) => {
  return (
    <p style={styles}>{discount}% Off</p>
  )
}

export default PorcentageDiscount;