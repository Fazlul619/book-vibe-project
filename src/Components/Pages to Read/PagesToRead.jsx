import axios from "axios";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const PagesToRead = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("books.json").then((data) => {
      const booksData = data.data;
      const bookData = booksData.map((book) => {
        const obj = {
          name: book.bookName,
          page: book.totalPages,
        };
        return obj;
      });
      setBooks(bookData);
    });
  }, []);
  return (
    <div
      className="bg-[#13131308] rounded-xl mt-14"
      style={{ width: "100%", height: 522 }}
    >
      <ResponsiveContainer>
        <BarChart
          width={1600}
          height={522}
          data={books}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="page" />
          <Bar
            dataKey="page"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {books.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
