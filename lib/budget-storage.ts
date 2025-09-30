// Budget storage utility for saving and retrieving budget history

export type BudgetSummary = {
  id: string
  clientName: string
  carMake: string
  carModel: string
  carYear: string
  totalCost: number
  date: Date
}

// Save a budget to local storage
export const saveBudget = (budget: BudgetSummary) => {
  try {
    // Get existing budgets
    const existingBudgetsJSON = localStorage.getItem("budgetHistory")
    const existingBudgets: BudgetSummary[] = existingBudgetsJSON ? JSON.parse(existingBudgetsJSON) : []

    // Add new budget
    const updatedBudgets = [budget, ...existingBudgets]

    // Save back to local storage (limit to last 100 budgets)
    localStorage.setItem("budgetHistory", JSON.stringify(updatedBudgets.slice(0, 100)))

    return true
  } catch (error) {
    console.error("Error saving budget:", error)
    return false
  }
}

// Get all budgets from local storage
export const getBudgets = (): BudgetSummary[] => {
  try {
    const budgetsJSON = localStorage.getItem("budgetHistory")
    if (!budgetsJSON) return []

    const budgets = JSON.parse(budgetsJSON)

    // Convert date strings back to Date objects
    return budgets.map((budget: any) => ({
      ...budget,
      date: new Date(budget.date),
      totalCost: Number(budget.totalCost),
    }))
  } catch (error) {
    console.error("Error retrieving budgets:", error)
    return []
  }
}

// Delete a budget by ID
export const deleteBudget = (id: string): boolean => {
  try {
    const budgets = getBudgets()
    const updatedBudgets = budgets.filter((budget) => budget.id !== id)
    localStorage.setItem("budgetHistory", JSON.stringify(updatedBudgets))
    return true
  } catch (error) {
    console.error("Error deleting budget:", error)
    return false
  }
}

// Clear all budget history
export const clearBudgetHistory = (): boolean => {
  try {
    localStorage.removeItem("budgetHistory")
    return true
  } catch (error) {
    console.error("Error clearing budget history:", error)
    return false
  }
}
