"use client";
import { db } from '../firebaseConfig';
import { doc, getDoc, setDoc, increment } from 'firebase/firestore';
import { useEffect, useState } from 'react';


const TrackVisit: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    trackVisitAndGetCount().then(setVisitCount);
  }, []);

  return (
    <div className="text-gray-600 mt-4">
      {visitCount !== null ? `Total Visits: ${visitCount}` : 'Loading...'}
    </div>
  );
};

export default TrackVisit;
const trackVisitAndGetCount = async (): Promise<number> => {
  try {
    const visitRef = doc(db, 'analytics', 'pageViews');
    const docSnap = await getDoc(visitRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.count;
    } else {
      await setDoc(visitRef, { count: 1 });
      return 1;
    }
  } catch (error) {
    console.error('Error accessing Firestore:', error);
    return 0;
  }
};

