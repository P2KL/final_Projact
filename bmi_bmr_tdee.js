// โปรแกรมคำนวณ BMI, BMR, และ TDEE ด้วย JavaScript

function calculateBMI(weight, height) {
    // คำนวณค่าดัชนีมวลกาย (BMI)
    return weight / (height / 100) ** 2;
}

function calculateBMR(weight, height, age, gender) {
    // คำนวณอัตราการเผาผลาญพลังงานพื้นฐาน (BMR)
    if (gender.toLowerCase() === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender.toLowerCase() === 'female') {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        throw new Error("Invalid gender. Use 'male' or 'female'.");
    }
}

function calculateTDEE(bmr, activityLevel) {
    // คำนวณพลังงานที่ร่างกายใช้ในแต่ละวัน (TDEE)
    const activityMultipliers = {
        sedentary: 1.2,       // นั่งทำงานอยู่กับที่
        light: 1.375,        // ออกกำลังกายเบาๆ หรือทำกิจกรรมเล็กน้อย
        moderate: 1.55,      // ออกกำลังกายปานกลาง
        active: 1.725,       // ออกกำลังกายหนัก
        very_active: 1.9     // ออกกำลังกายหนักมากหรือทำงานที่ใช้แรง
    };

    const multiplier = activityMultipliers[activityLevel.toLowerCase()];
    if (multiplier) {
        return bmr * multiplier;
    } else {
        throw new Error("Invalid activity level. Use 'sedentary', 'light', 'moderate', 'active', or 'very_active'.");
    }
}

function main() {
    console.log("\nโปรแกรมคำนวณ BMI, BMR, และ TDEE");

    // รับข้อมูลจากผู้ใช้
    const weight = parseFloat(prompt("ป้อนน้ำหนัก (กิโลกรัม): "));
    const height = parseFloat(prompt("ป้อนส่วนสูง (เซนติเมตร): "));
    const age = parseInt(prompt("ป้อนอายุ (ปี): "));
    const gender = prompt("ป้อนเพศ (male/female): ");
    const activityLevel = prompt("ป้อนระดับกิจกรรม (sedentary, light, moderate, active, very_active): ");

    try {
        // คำนวณค่า
        const bmi = calculateBMI(weight, height);
        const bmr = calculateBMR(weight, height, age, gender);
        const tdee = calculateTDEE(bmr, activityLevel);

        // แสดงผลลัพธ์
        console.log("\nผลลัพธ์");
        console.log(`BMI: ${bmi.toFixed(2)} (ดัชนีมวลกาย)`);
        console.log(`BMR: ${bmr.toFixed(2)} แคลอรี/วัน (อัตราการเผาผลาญพลังงานพื้นฐาน)`);
        console.log(`TDEE: ${tdee.toFixed(2)} แคลอรี/วัน (พลังงานที่ร่างกายใช้ในแต่ละวัน)`);
    } catch (error) {
        console.error(`ข้อผิดพลาด: ${error.message}`);
    }
}

main();
