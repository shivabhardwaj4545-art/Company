import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, projectType, budgetRange, details } = body;

    console.log('====================================');
    console.log('📥 NEW LEAD CAPTURED FROM MODAL:');
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email || 'N/A');
    console.log('Project Type:', projectType);
    console.log('Budget Range:', budgetRange);
    console.log('Details:', details || 'N/A');
    console.log('Timestamp:', new Date().toISOString());
    console.log('====================================');

    // Return success response to client
    return NextResponse.json({
      success: true,
      message: 'Lead received successfully.',
      leadId: `lead_${Date.now()}`,
    });
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
