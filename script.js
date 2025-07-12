// Encounter data table
        const encounterTable = {
            // APL 1
            1: {
                "1creature": 3,
                "2creatures": 2,
                "4creatures": 1,
                "6creatures": 0,
                "8creatures": -1,
                "12creatures": -2,
                "boss2": "3+-1(x2)",
                "boss3": "3+-2(x3)",
                "boss4": "3+-2(x4)",
                "bosslt4": "3+0+-3(x4)"
            },
            // APL 2
            2: {
                "1creature": 4,
                "2creatures": 3,
                "4creatures": 2,
                "6creatures": 1,
                "8creatures": 0,
                "12creatures": -1,
                "boss2": "4+0(x2)",
                "boss3": "4+-1(x3)",
                "boss4": "4+-1(x4)",
                "bosslt4": "4+1+-2(x4)"
            },
            // And so on for all APLs...
            3: {
                "1creature": 5,
                "2creatures": 4,
                "4creatures": 3,
                "6creatures": 2,
                "8creatures": 1,
                "12creatures": 0,
                "boss2": "5+1(x2)",
                "boss3": "5+0(x3)",
                "boss4": "5+0(x4)",
                "bosslt4": "5+2+-1(x4)"
            },
            4: {
                "1creature": 6,
                "2creatures": 5,
                "4creatures": 4,
                "6creatures": 3,
                "8creatures": 2,
                "12creatures": 1,
                "boss2": "6+2(x2)",
                "boss3": "6+1(x3)",
                "boss4": "6+1(x4)",
                "bosslt4": "6+3+0(x4)"
            },
            5: {
                "1creature": 7,
                "2creatures": 6,
                "4creatures": 5,
                "6creatures": 4,
                "8creatures": 3,
                "12creatures": 2,
                "boss2": "7+3(x2)",
                "boss3": "7+2(x3)",
                "boss4": "7+2(x4)",
                "bosslt4": "7+4+1(x4)"
            },
            6: {
                "1creature": 8,
                "2creatures": 7,
                "4creatures": 6,
                "6creatures": 5,
                "8creatures": 4,
                "12creatures": 3,
                "boss2": "8+4(x2)",
                "boss3": "8+3(x3)",
                "boss4": "8+3(x4)",
                "bosslt4": "8+5+2(x4)"
            },
            7: {
                "1creature": 9,
                "2creatures": 8,
                "4creatures": 7,
                "6creatures": 6,
                "8creatures": 5,
                "12creatures": 4,
                "boss2": "9+5(x2)",
                "boss3": "9+4(x3)",
                "boss4": "9+4(x4)",
                "bosslt4": "9+6+3(x4)"
            },
            8: {
                "1creature": 10,
                "2creatures": 9,
                "4creatures": 8,
                "6creatures": 7,
                "8creatures": 6,
                "12creatures": 5,
                "boss2": "10+6(x2)",
                "boss3": "10+5(x3)",
                "boss4": "10+5(x4)",
                "bosslt4": "10+7+4(x4)"
            },
            9: {
                "1creature": 11,
                "2creatures": 10,
                "4creatures": 9,
                "6creatures": 8,
                "8creatures": 7,
                "12creatures": 6,
                "boss2": "11+7(x2)",
                "boss3": "11+6(x3)",
                "boss4": "11+6(x4)",
                "bosslt4": "11+8+5(x4)"
            },
            10: {
                "1creature": 12,
                "2creatures": 11,
                "4creatures": 10,
                "6creatures": 9,
                "8creatures": 8,
                "12creatures": 7,
                "boss2": "12+8(x2)",
                "boss3": "12+7(x3)",
                "boss4": "12+7(x4)",
                "bosslt4": "12+9+6(x4)"
            },
            11: {
                "1creature": 13,
                "2creatures": 12,
                "4creatures": 11,
                "6creatures": 10,
                "8creatures": 9,
                "12creatures": 8,
                "boss2": "13+9(x2)",
                "boss3": "13+8(x3)",
                "boss4": "13+8(x4)",
                "bosslt4": "13+10+7(x4)"
            },
            12: {
                "1creature": 14,
                "2creatures": 13,
                "4creatures": 12,
                "6creatures": 11,
                "8creatures": 10,
                "12creatures": 9,
                "boss2": "14+10(x2)",
                "boss3": "14+9(x3)",
                "boss4": "14+9(x4)",
                "bosslt4": "14+11+8(x4)"
            },
            13: {
                "1creature": 15,
                "2creatures": 14,
                "4creatures": 13,
                "6creatures": 12,
                "8creatures": 11,
                "12creatures": 10,
                "boss2": "15+11(x2)",
                "boss3": "15+10(x3)",
                "boss4": "15+10(x4)",
                "bosslt4": "15+12+9(x4)"
            },
            14: {
                "1creature": 16,
                "2creatures": 15,
                "4creatures": 14,
                "6creatures": 13,
                "8creatures": 12,
                "12creatures": 11,
                "boss2": "16+12(x2)",
                "boss3": "16+11(x3)",
                "boss4": "16+11(x4)",
                "bosslt4": "16+13+10(x4)"
            },
            15: {
                "1creature": 17,
                "2creatures": 16,
                "4creatures": 15,
                "6creatures": 14,
                "8creatures": 13,
                "12creatures": 12,
                "boss2": "17+13(x2)",
                "boss3": "17+12(x3)",
                "boss4": "17+12(x4)",
                "bosslt4": "17+14+11(x4)"
            },
            16: {
                "1creature": 18,
                "2creatures": 17,
                "4creatures": 16,
                "6creatures": 15,
                "8creatures": 14,
                "12creatures": 13,
                "boss2": "18+14(x2)",
                "boss3": "18+13(x3)",
                "boss4": "18+13(x4)",
                "bosslt4": "18+15+12(x4)"
            },
            17: {
                "1creature": 19,
                "2creatures": 18,
                "4creatures": 17,
                "6creatures": 16,
                "8creatures": 15,
                "12creatures": 14,
                "boss2": "19+15(x2)",
                "boss3": "19+14(x3)",
                "boss4": "19+14(x4)",
                "bosslt4": "19+16+13(x4)"
            },
            18: {
                "1creature": 20,
                "2creatures": 19,
                "4creatures": 18,
                "6creatures": 17,
                "8creatures": 16,
                "12creatures": 15,
                "boss2": "20+16(x2)",
                "boss3": "20+15(x3)",
                "boss4": "20+15(x4)",
                "bosslt4": "20+17+14(x4)"
            },
            19: {
                "1creature": 21,
                "2creatures": 20,
                "4creatures": 19,
                "6creatures": 18,
                "8creatures": 17,
                "12creatures": 16,
                "boss2": "21+17(x2)",
                "boss3": "21+16(x3)",
                "boss4": "21+16(x4)",
                "bosslt4": "21+18+15(x4)"
            },
            20: {
                "1creature": 22,
                "2creatures": 21,
                "4creatures": 20,
                "6creatures": 19,
                "8creatures": 18,
                "12creatures": 17,
                "boss2": "22+18(x2)",
                "boss3": "22+17(x3)",
                "boss4": "22+17(x4)",
                "bosslt4": "22+19+16(x4)"
            },
            21: {
                "1creature": 23,
                "2creatures": 22,
                "4creatures": 21,
                "6creatures": 20,
                "8creatures": 19,
                "12creatures": 18,
                "boss2": "23+19(x2)",
                "boss3": "23+18(x3)",
                "boss4": "23+18(x4)",
                "bosslt4": "23+20+17(x4)"
            },
            22: {
                "1creature": 24,
                "2creatures": 23,
                "4creatures": 22,
                "6creatures": 21,
                "8creatures": 20,
                "12creatures": 19,
                "boss2": "24+20(x2)",
                "boss3": "24+19(x3)",
                "boss4": "24+19(x4)",
                "bosslt4": "24+21+18(x4)"
            },
            23: {
                "1creature": 25,
                "2creatures": 24,
                "4creatures": 23,
                "6creatures": 22,
                "8creatures": 21,
                "12creatures": 20,
                "boss2": "25+21(x2)",
                "boss3": "25+20(x3)",
                "boss4": "25+20(x4)",
                "bosslt4": "25+22+19(x4)"
            },
            24: {
                "1creature": 26,
                "2creatures": 25,
                "4creatures": 24,
                "6creatures": 23,
                "8creatures": 22,
                "12creatures": 21,
                "boss2": "26+22(x2)",
                "boss3": "26+21(x3)",
                "boss4": "26+21(x4)",
                "bosslt4": "26+23+20(x4)"
            },
            25: {
                "1creature": 27,
                "2creatures": 26,
                "4creatures": 25,
                "6creatures": 24,
                "8creatures": 23,
                "12creatures": 22,
                "boss2": "27+23(x2)",
                "boss3": "27+22(x3)",
                "boss4": "27+22(x4)",
                "bosslt4": "27+24+21(x4)"
            }
        };

        document.getElementById('calculateBtn').addEventListener('click', function() {
            const partyLevel = parseInt(document.getElementById('partyLevel').value);
            const encounterType = document.getElementById('encounterType').value;
            
            // Get the result from the table
            const result = encounterTable[partyLevel][encounterType];
            
            let resultText = '';
            let explanationText = '';
            
            // Format the result based on encounter type
            if (encounterType.includes('creatures') || encounterType === '1creature') {
                // Simple creature encounters
                const count = encounterType === '1creature' ? 1 : 
                              parseInt(encounterType.replace('creatures', ''));
                resultText = `${count} Level ${result} creature${count > 1 ? 's' : ''}`;
                explanationText = `For a party with average level ${partyLevel}, an encounter with ${count} creature${count > 1 ? 's' : ''} should use level ${result} creature${count > 1 ? 's' : ''}.`;
            } else {
                // Complex boss encounters
                resultText = result;
                
                // Parse the complex boss format
                if (encounterType === 'boss2') {
                    const [bossLevel, minionModifier] = parseBossEncounterModifiers(result);
                    const minionCount = 2;
                    const actualMinionLevel = minionModifier;
                    explanationText = `For a party with average level ${partyLevel}, use a level ${bossLevel} boss with ${minionCount} level ${actualMinionLevel} minions.`;
                } else if (encounterType === 'boss3') {
                    const [bossLevel, minionModifier] = parseBossEncounterModifiers(result);
                    const minionCount = 3;
                    const actualMinionLevel = minionModifier;
                    explanationText = `For a party with average level ${partyLevel}, use a level ${bossLevel} boss with ${minionCount} level ${actualMinionLevel} minions.`;
                } else if (encounterType === 'boss4') {
                    const [bossLevel, minionModifier] = parseBossEncounterModifiers(result);
                    const minionCount = 4;
                    const actualMinionLevel = minionModifier;
                    explanationText = `For a party with average level ${partyLevel}, use a level ${bossLevel} boss with ${minionCount} level ${actualMinionLevel} minions.`;
                } else if (encounterType === 'bosslt4') {
                    const [bossLevel, ltModifier, minionModifier] = parseBossLtEncounterModifiers(result);
                    const ltLevel = ltModifier;
                    const minionLevel = minionModifier;
                    explanationText = `For a party with average level ${partyLevel}, use a level ${bossLevel} boss with a level ${ltLevel} lieutenant and 4 level ${minionLevel} minions.`;
                }
            }
            
            // Display the result
            document.getElementById('encounterResult').innerHTML = `<strong>${resultText}</strong>`;
            document.getElementById('explanationText').innerHTML = explanationText;
            document.getElementById('resultContainer').classList.remove('d-none');
        });
        
        // Helper function to parse boss encounter format like "7+3(x2)"
        function parseBossEncounterModifiers(value) {
            const match = value.match(/(\d+)\+([+-]?\d+)\(x\d+\)/);
            if (match) {
                const bossLevel = parseInt(match[1]);
                const minionModifier = parseInt(match[2]);
                return [bossLevel, minionModifier];
            }
            return [0, 0];
        }
        
        // Helper function to parse boss+lt encounter format like "7+4+1(x4)"
        function parseBossLtEncounterModifiers(value) {
            const match = value.match(/(\d+)\+(\d+)\+([+-]?\d+)\(x\d+\)/);
            if (match) {
                const bossLevel = parseInt(match[1]);
                const ltModifier = parseInt(match[2]);
                const minionModifier = parseInt(match[3]);
                
                return [bossLevel, ltModifier, minionModifier];
            }
            return [0, 0, 0];
        }
