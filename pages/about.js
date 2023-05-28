import React from 'react'

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};
export default function about() {
  return (
    <div></div>
  )
}
