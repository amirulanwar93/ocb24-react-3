import Card from "./components/Cards";
import Count from "./components/Count";

const users = [
  {
    id: 1,
    name: "Ammar",
    avatar: `https://picsum.photos/200?random=${Math.random()}`,
    active: true,
    education: {
      primary: "SK Taman Alam Megah",
      secondary: "SMK Alam Megah",
      tertiary: "Universiti Kebangsaan Malaysia",
    },
  },
  {
    id: 2,

    name: "Misha",
    avatar: `https://picsum.photos/200?random=${Math.random()}`,
    active: false,
    education: {
      primary: "SK Taman Alam Megah",
      secondary: "SMK Alam Megah",
      tertiary: "Universiti Kebangsaan Malaysia",
    },
  },
  {
    id: 3,
    name: "Naufal",
    avatar: `https://picsum.photos/200?random=${Math.random()}`,
    active: true,
    education: {
      primary: "SK Taman Alam Megah",
      secondary: "SMK Alam Megah",
      tertiary: "Universiti Kebangsaan Malaysia",
    },
  },
  {
    id: 4,
    name: "Ahmad",
    avatar: `https://picsum.photos/200?random=${Math.random()}`,
    active: true,
    education: {
      primary: "SK Taman Alam Megah",
      secondary: "SMK Alam Megah",
      tertiary: "Universiti Kebangsaan Malaysia",
    },
  },
  {
    id: 5,
    name: "Haziq",
    avatar: `https://picsum.photos/200?random=${Math.random()}`,
    active: true,
    education: {
      primary: "SK Taman Alam Megah",
      secondary: "SMK Alam Megah",
      tertiary: "Universiti Kebangsaan Malaysia",
    },
  },
];

function App() {
  return (
    <>
      <Count />
      {users.map((user) => {
        return (
          <Card user={user} hidden={user.active === !true} key={user.id} />
        );
      })}
    </>
  );
}

export default App;
