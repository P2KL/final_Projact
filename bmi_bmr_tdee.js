// ������ӹǳ BMI, BMR, ��� TDEE ���� JavaScript

function calculateBMI(weight, height) {
    // �ӹǳ��ҴѪ����š�� (BMI)
    return weight / (height / 100) ** 2;
}

function calculateBMR(weight, height, age, gender) {
    // �ӹǳ�ѵ�ҡ���Ҽ�ҭ��ѧ�ҹ��鹰ҹ (BMR)
    if (gender.toLowerCase() === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender.toLowerCase() === 'female') {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    } else {
        throw new Error("Invalid gender. Use 'male' or 'female'.");
    }
}

function calculateTDEE(bmr, activityLevel) {
    // �ӹǳ��ѧ�ҹ�����ҧ�����������ѹ (TDEE)
    const activityMultipliers = {
        sedentary: 1.2,       // ��觷ӧҹ����Ѻ���
        light: 1.375,        // �͡���ѧ������ ���ͷӡԨ������硹���
        moderate: 1.55,      // �͡���ѧ��»ҹ��ҧ
        active: 1.725,       // �͡���ѧ���˹ѡ
        very_active: 1.9     // �͡���ѧ���˹ѡ�ҡ���ͷӧҹ������ç
    };

    const multiplier = activityMultipliers[activityLevel.toLowerCase()];
    if (multiplier) {
        return bmr * multiplier;
    } else {
        throw new Error("Invalid activity level. Use 'sedentary', 'light', 'moderate', 'active', or 'very_active'.");
    }
}

function main() {
    console.log("\n������ӹǳ BMI, BMR, ��� TDEE");

    // �Ѻ�����Ũҡ�����
    const weight = parseFloat(prompt("��͹���˹ѡ (���š���): "));
    const height = parseFloat(prompt("��͹��ǹ�٧ (ૹ������): "));
    const age = parseInt(prompt("��͹���� (��): "));
    const gender = prompt("��͹�� (male/female): ");
    const activityLevel = prompt("��͹�дѺ�Ԩ���� (sedentary, light, moderate, active, very_active): ");

    try {
        // �ӹǳ���
        const bmi = calculateBMI(weight, height);
        const bmr = calculateBMR(weight, height, age, gender);
        const tdee = calculateTDEE(bmr, activityLevel);

        // �ʴ����Ѿ��
        console.log("\n���Ѿ��");
        console.log(`BMI: ${bmi.toFixed(2)} (�Ѫ����š��)`);
        console.log(`BMR: ${bmr.toFixed(2)} �����/�ѹ (�ѵ�ҡ���Ҽ�ҭ��ѧ�ҹ��鹰ҹ)`);
        console.log(`TDEE: ${tdee.toFixed(2)} �����/�ѹ (��ѧ�ҹ�����ҧ�����������ѹ)`);
    } catch (error) {
        console.error(`��ͼԴ��Ҵ: ${error.message}`);
    }
}

main();
