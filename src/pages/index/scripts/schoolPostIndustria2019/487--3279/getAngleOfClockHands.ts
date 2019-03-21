export default function getAngleOfClockHands(timeStr: string) { 
   const time = timeStr.split(':').map(comp => parseInt(comp));
   const h = time[0];
   const m = time[1];

   const hAngle = (360 / 12) * (h % 12) +
		(360 / 12 / 60) * m;

	const mAngle = (360 / 60) * (m % 60);

	let angle = Math.abs(hAngle - mAngle);
   if (angle > 180) angle = 360 - angle;
   
   return angle;
}