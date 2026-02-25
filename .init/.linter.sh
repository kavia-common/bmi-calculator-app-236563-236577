#!/bin/bash
cd /tmp/kavia/workspace/code-generation/bmi-calculator-app-236563-236577/bmi_calculator_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

