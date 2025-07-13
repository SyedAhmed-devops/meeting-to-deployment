import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

export default function App() {
  const [notes, setNotes] = useState('')
  const [docGenerated, setDocGenerated] = useState(false)
  const [approved, setApproved] = useState(null)
  const [devComplete, setDevComplete] = useState(false)
  const [uatApproved, setUatApproved] = useState(null)

  return (
    <main className='p-6 max-w-3xl mx-auto space-y-6'>
      <section className='border p-4 rounded'>
        <h2 className='text-xl font-bold mb-2'>1. Capture Meeting Notes</h2>
        <textarea
          className='w-full border rounded p-2'
          rows='4'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder='Paste or write meeting notes here...'
        />
        <button className='mt-3 px-4 py-2 bg-blue-600 text-white rounded' onClick={() => setDocGenerated(true)}>
          Generate Technical Document
        </button>
      </section>

      {docGenerated && (
        <section className='border p-4 rounded'>
          <h2 className='text-xl font-bold mb-2'>2. Approve Document</h2>
          <p className='mb-2'>Document Summary: New requirement identified in meeting notes.</p>
          <button className='mr-4 px-4 py-2 bg-green-600 text-white rounded' onClick={() => setApproved(true)}>
            <CheckCircle className='inline mr-2' /> Approve
          </button>
          <button className='px-4 py-2 bg-red-600 text-white rounded' onClick={() => setApproved(false)}>
            <XCircle className='inline mr-2' /> Reject
          </button>
        </section>
      )}

      {approved && (
        <section className='border p-4 rounded'>
          <h2 className='text-xl font-bold mb-2'>3. Dev Work in Progress</h2>
          <p>Feature branch created: <code>feature/new-requirement</code></p>
          <button className='mt-2 px-4 py-2 bg-purple-600 text-white rounded' onClick={() => setDevComplete(true)}>
            Mark Dev as Complete
          </button>
        </section>
      )}

      {devComplete && (
        <section className='border p-4 rounded'>
          <h2 className='text-xl font-bold mb-2'>4. UAT Approval</h2>
          <p className='mb-2'>Stakeholders review and validate implementation.</p>
          <button className='mr-4 px-4 py-2 bg-green-600 text-white rounded' onClick={() => setUatApproved(true)}>
            <CheckCircle className='inline mr-2' /> Approve UAT
          </button>
          <button className='px-4 py-2 bg-red-600 text-white rounded' onClick={() => setUatApproved(false)}>
            <XCircle className='inline mr-2' /> Reject UAT
          </button>
        </section>
      )}

      {uatApproved === true && (
        <div className='text-green-700 font-bold'>✅ Change Promoted to UAT</div>
      )}
      {uatApproved === false && (
        <div className='text-red-700 font-bold'>❌ UAT Rejected. Please revise.</div>
      )}
    </main>
  )
}
