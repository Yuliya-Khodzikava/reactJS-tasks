// import { useFetch } from './hooks/useFetch';
// import { useLocalStorage } from './hooks/useLocalStorage.ts';
// import { useHover } from './hooks/useHover';
// import { useViewportSize } from './hooks/useViewportSize';
// import { useWindowScroll } from './hooks/useWindowScroll';
import { useToggle } from './hooks/useToggle';


//useFetch
// function App() {
//   const {
//     data,
//     isLoading,
//     error,
//     refetch
//   } = useFetch('https://jsonplaceholder.typicode.com/posts');
	
//   return (
//     <div>
//       <div>
//         <title>Hello</title>
//         <button onClick={() => refetch({
//           params: {
//             _limit: 3
//           }
//         })}>
//           Перезапросить
//         </button>
//       </div>
//       {isLoading && 'Загрузка...'}
//       {error && 'Произошла ошибка'}
//       {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
//     </div>
//   );
// }


//useLocalStorage
// function App() {
//   const [value, { setItem, removeItem }] = useLocalStorage('some-key');

//   return (
//     <div>
//       <p>Значение из LocalStorage: {value}</p>
//       <div>
//         <button onClick={() => setItem('new storage value')}>Задать значение</button>
//         <button onClick={() => removeItem()}>Удалить значение</button>
//       </div>
//     </div>
//   );
// }


//useHover
// function App() {
//   const { hovered, ref } = useHover();

//   return (
//     <div ref={ref}>
//       {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
//     </div>
//   );
// }


//useViewportSize
// function App() {
//   const { height, width } = useViewportSize();

//   return (
//     <>
//       Width: {width}, height: {height}
//     </>
//   );
// }


// useWindowScroll
// function App() {
//   const [scroll, scrollTo] = useWindowScroll();

//   const inner = {
//     position: 'fixed'
//   }

//   const main  ={
//     height: '2000px',
//     width: '2000px'
//   }

//   return (
//     <div style={main}>
//       <div style={inner}>
//         <p>
//           Scroll position x: {scroll.x}, y: {scroll.y}
//         </p>
//         <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
//       </div>
//     </div>
//   );
// }


//useToggle
function App() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}

export default App;
