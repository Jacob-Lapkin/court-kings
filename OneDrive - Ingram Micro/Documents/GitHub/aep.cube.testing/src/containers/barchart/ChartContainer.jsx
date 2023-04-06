import React, { useState, useEffect } from "react";
import VerticalBarChart from "../../components/VerticalBarChart";
import fetchFeedbackHistory from "../../hooks/GetHistory";

function ChartContainer() {
  const [feedbackData, setFeedbackData] = useState(null);

  useEffect(() => {
    async function fetchFeedback() {
      const data = await fetchFeedbackHistory();
      setFeedbackData(data);
    }

    fetchFeedback();
  }, []);

  if (!feedbackData) {
    return <div>Loading...</div>;
  }

  const labels = feedbackData.map((item) => item.relationship);
  const positiveData = feedbackData.map((item) => item.positive);
  const negativeData = feedbackData.map((item) => item.negative);
  const title = "Your Feedback: Macbook Pro 14 (2021)";

  return (
    <div
      style={{
        width: "550px",
        borderRadius: "8px",
        overflow: "hidden",
        padding: "20px",
        height: "275px",
      }}
    >
      <VerticalBarChart
        labels={labels}
        positiveData={positiveData}
        negativeData={negativeData}
        title={title}
      />
    </div>
  );
}

export default ChartContainer;
